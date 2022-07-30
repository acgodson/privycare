import { FieldInstance } from "@privy-io/privy-browser";

export type UserDataInput = {
  firstname: string;
  lastname: string;
  email: string;
  street: string;
  city: string;
  state: string;
  phone: string;
  zip: string;
  avatar: string;
};


export type CreatorData = {
  provider: string;
  title: string;
  company: string;
  about: string;
};

export type UserData = {
  firstname: FieldInstance | null;
  lastname: FieldInstance | null;
  email: FieldInstance | null;
  street: FieldInstance | null;
  city: FieldInstance | null;
  state: FieldInstance | null;
  phone: FieldInstance | null;
  zip: FieldInstance | null;
  avatar: FieldInstance | null;
};

export type CreatorDataModel = {
  title: FieldInstance | null;
  provider: FieldInstance | null;
  company: FieldInstance | null;
  about: FieldInstance | null;
};

export type UserDataKey = keyof UserData;
export type CreatorDataKey = keyof CreatorData;

export function formatUserData(
  fields: Array<FieldInstance | null>
): UserDataInput {
  return fields.reduce((data, field) => {
    if (field !== null) {
      data[field.field_id as UserDataKey] = field.text();
    }
    return data;
  }, {} as UserDataInput);
}


export function formatCreatorData(
  fields: Array<FieldInstance | null>
): CreatorData {
  return fields.reduce((data, field) => {
    if (field !== null) {
      data[field.field_id as CreatorDataKey] = field.text();
    }
    return data;
  }, {} as CreatorData);
}






export function formatDisplayAddress(address: string) {
  const first = address.slice(0, 5);
  const last = address.slice(address.length - 3, address.length);
  return `${first}...${last}`;
}


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

export const Today = yyyy + '-' + mm + '-' +  dd;
