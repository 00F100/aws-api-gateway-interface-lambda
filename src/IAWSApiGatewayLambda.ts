export interface IAWSApiGatewayLambda {
  version: number;
  resource: string;
  path: string;
  httpMethod: string;
  headers: Headers;
  multiValueHeaders: MultiHeaders;
  queryStringParameters: QueryString;
  multiValueQueryStringParameters: MultiQueryString;
  requestContext: RequestContext;
  pathParameters: PathParameters;
  stageVariables: any;
  body: any;
  isBase64Encoded: boolean;
}

export interface Headers {
  [name: string]: string;
}

export interface MultiHeaders {
  [name: string]: string[];
}

export interface QueryString {
  [name: string]: string;
}

export interface MultiQueryString {
  [name: string]: string[];
}

export interface RequestContext {
  accountId: string;
  apiId: string;
  authorizer: any;
  domainName: string;
  domainPrefix: string;
  extendedRequestId: string;
  httpMethod: string;
  identity: RequestIdentity;
  path: string;
  protocol: string;
  requestId: string;
  requestTime: string;
  requestTimeEpoch: string;
  resourceId: any;
  resourcePath: string;
  stage: string;
}

export interface RequestIdentity {
  accessKey: string;
  accountId: string;
  caller: any;
  cognitoAuthenticationProvider: any;
  cognitoAuthenticationType: string;
  cognitoIdentityId: string;
  cognitoIdentityPoolId: string;
  principalOrgId: string;
  sourceIp: string;
  user: any;
  userAgent: string;
  userArn: string;
}

export interface PathParameters {
  [name: string]: string;
}