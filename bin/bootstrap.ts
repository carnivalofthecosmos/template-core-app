#!/usr/bin/env node
import "source-map-support/register";
import { App } from "@aws-cdk/core";
import { CoreBootstrapStack } from "@carnivalofthecosmos/bootstrap";


const app = new App();

new CoreBootstrapStack(app)

