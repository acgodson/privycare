import React, { Dispatch, SetStateAction, useState } from "react";
import { createContext, useContext } from "react";
import { useRouter } from "next/router";
import { PrivyClient, SiweSession } from "@privy-io/privy-browser";
import {
  NEXT_PUBLIC_PRIVY_API_HOST,
  NEXT_PUBLIC_PRIVY_API_KEY,
  NEXT_PUBLIC_PRIVY_KMS_HOST,
} from "../config";


export function isMetaMaskEnabled() {
  return !!(
    typeof window !== "undefined" &&
    window.ethereum &&
    window.ethereum.isMetaMask
  );
}

const NodeMockProvider = {
  request(arg: {
    method: string;
    params?: [address: string, message: string];
  }) {
    switch (arg.method) {
      case "personal_sign":
        return "";
      case "eth_accounts":
        return [];
      case "eth_requestAccounts":
        return [];
      case "eth_chainId":
        return "0x1";
      default:
        throw new Error("unrecognized ethereum method");
    }
  },
};


class Session {
  private siwe: SiweSession;
  private _address: string | null;

  privy: PrivyClient;

  
  constructor(provider: any) {
    this.siwe = new SiweSession(NEXT_PUBLIC_PRIVY_API_KEY, provider, {
      baseURL: NEXT_PUBLIC_PRIVY_API_HOST,
    });

    this.privy = new PrivyClient({
      apiURL: "https://api.privy.io/v0",
      kmsURL: "https://kms.privy.io/v0",
      session: this.siwe,
    });

    this._address = null;
  }


  get address() {
    if (this._address === null) {
      throw new Error("Attempt to reference address when null");
    }

    return this._address;
  }


  get authenticated() {
    return this._address !== null;
  }

  async initialize() {
    const authenticated = await this.siwe.isAuthenticated();

    if (!authenticated) {
      return;
    }

    this._address = await this.siwe.address();
  }

  
  async authenticate() {
    await this.siwe.authenticate();
    const address = await this.siwe.address();
    this._address = address;
  }

 
  async destroy() {
    await this.siwe.destroy();
    this._address = null;
  }
}

const SessionContext = createContext<Session>(
  new Session(isMetaMaskEnabled() ? window.ethereum : NodeMockProvider)
);

export function useSession() {
  return useContext(SessionContext);
}

const CreatorContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([true, () => {}]);

export function CreatorProvider(props: {children: any}) {
    const [creator, setCreator] = useState(true);
  return (
      <CreatorContext.Provider value={[creator, setCreator]}> {props.children}
      </CreatorContext.Provider>
  );
  
}

export function useCreator() {
  return useContext(CreatorContext);
}




export function SignOutLink() {
  const router = useRouter();
  const session = useSession();
  const  [creator, setCreator]  = useCreator();

  return (
    <a
      href="/sign-out"
      onClick={(e) => {
        e.preventDefault();
        if (creator === false) {
          setCreator(true);
        }
        session.destroy().then(() => router.push("/sign-in"));     
      }}
    >
      Sign out
    </a>
  );
}
