#!/usr/bin/env node
import "source-map-support/register";
import { App } from "@aws-cdk/core";
import {
  ProjectStack,
  AccountStack,
  CiEnvStack,
  EcsAppEnvStack
} from "@carnivalofthecosmos/core";

const app = new App();

const projectStack = new ProjectStack(app, "Devops", {
  tld: "carnivalofthecosmos.com"
});

const mgtAccount = new AccountStack(projectStack, "Mgt", {
  cidr: "10.0.0.0/22"
});

const ciEnv = new CiEnvStack(mgtAccount, {
  networkBuilder: mgtAccount.NetworkBuilder
});

const devEcsAppEnv = new EcsAppEnvStack(mgtAccount, "Dev", {
  networkBuilder: mgtAccount.NetworkBuilder
});

const tstAppEnv = new EcsAppEnvStack(mgtAccount, "Tst");
