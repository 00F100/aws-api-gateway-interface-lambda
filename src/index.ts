export interface Request {
  version: number;
  resource: string;
  path: string;
  httpMethod: string;
  headers?: Headers | null;
  multiValueHeaders?: MultiHeaders | null;
  queryStringParameters?: QueryString | null;
  multiValueQueryStringParameters?: MultiQueryString | null;
  requestContext?: RequestContext | null;
  pathParameters?: PathParameters | null;
  stageVariables?: any | null;
  body?: string | null;
  isBase64Encoded?: boolean | null;
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
  requestTimeEpoch: number;
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

export interface Response {
  statusCode: number;
  body: string;
}

export interface DefaultObjectSingleValue {
  [name: string]: string;
}

export interface DefaultObjectMultiValue {
  [name: string]: string[];
}

export interface Headers extends DefaultObjectSingleValue {
}

export interface QueryString extends DefaultObjectSingleValue {
}

export interface MultiHeaders extends DefaultObjectMultiValue {
}


export interface MultiQueryString extends DefaultObjectMultiValue {
}

export interface PathParameters extends DefaultObjectSingleValue {
}