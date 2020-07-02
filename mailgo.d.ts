// Type definitions for mailgo
// Project: mailgo
// Definitions by: Matteo Manzinello <https://matteomanzinello.com>

declare module "mailgo";

export type MailgoConfig = {
  initEvent?: string;
  lang?: string;
  forceLang?: boolean;
  dark?: boolean;
  // additionalCSS?: string;
  // TODO here mailgo configurations!
};

export default function mailgo(mailgoConfig?: MailgoConfig): void;
