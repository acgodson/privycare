export const PRIVY_API_HOST = process.env.PRIVY_API_HOST as string;
export const PRIVY_KMS_HOST = process.env.PRIVY_KMS_HOST as string;
export const PRIVY_API_KEY = process.env.PRIVY_API_KEY as string;
export const PRIVY_API_SECRET = process.env.PRIVY_API_SECRET as string;

export const NEXT_PUBLIC_PRIVY_KMS_HOST = process.env
  .NEXT_PUBLIC_PRIVY_KMS_HOST as string;
export const NEXT_PUBLIC_PRIVY_API_HOST = process.env
  .NEXT_PUBLIC_PRIVY_API_HOST as string;
export const NEXT_PUBLIC_PRIVY_API_KEY = process.env
  .NEXT_PUBLIC_PRIVY_API_KEY as string;

  export const URL =
	process.env.NODE_ENV === "development"
		? "http://localhost:4040"
		: "https://privycare.herokuapp.com";

	