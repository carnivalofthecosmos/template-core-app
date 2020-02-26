#!/usr/bin/env node
import "source-map-support/register";
import { App } from "@aws-cdk/core";
import {
  ProjectStack,
  AccountStack,
  CiCdStack,
  EcsAppEnvStack
} from "@carnivalofthecosmos/core";

const app = new App();

// Project Infra
const projectStack = new ProjectStack(app, "TemplateCore", {
  tld: "carnivalofthecosmos.com"
  // env: { account: "1111" }
});

// Mgt Account Infra
const mgtAccount = new AccountStack(projectStack, "Mgt", {
  cidr: "10.0.0.0/22"
});

// CiCd Infra
const ciCd = new CiCdStack(mgtAccount, {
  networkBuilder: mgtAccount.NetworkBuilder
});

// Dev Account Infra
// const devAccount = new AccountStack(projectStack, "Dev", {
//   cidr: "10.0.1.0/22",
//   env: { account: "2222" }
// });

// Dev App Env Infra
const devAppEnv = new EcsAppEnvStack(mgtAccount, "Dev", {
  networkBuilder: mgtAccount.NetworkBuilder
});

// Tst App Env Infra
const tstAppEnv = new EcsAppEnvStack(mgtAccount, "Tst", {
  networkBuilder: mgtAccount.NetworkBuilder
});

// Prd Account Infra
// const prdAccount = new AccountStack(projectStack, "Prd", {
//   cidr: "10.0.2.0/22",
//   env: { account: "3333" }
// });

// Prd App Env Infra
// const prdAppEnv = new EcsAppEnvStack(prdAccount, "Prd");
