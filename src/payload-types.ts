/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    admins: Admin;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
export interface Admin {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password: string;
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  _verified?: boolean;
  _verificationToken?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password: string;
}
export interface PayloadPreference {
  id: string;
  user:
    | {
        relationTo: 'admins';
        value: string | Admin;
      }
    | {
        relationTo: 'users';
        value: string | User;
      };
  key?: string;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string;
  batch?: number;
  updatedAt: string;
  createdAt: string;
}
