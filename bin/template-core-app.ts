#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TemplateCoreAppStack } from '../lib/template-core-app-stack';

const app = new cdk.App();
new TemplateCoreAppStack(app, 'TemplateCoreAppStack');
