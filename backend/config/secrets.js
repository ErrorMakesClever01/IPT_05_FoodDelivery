import {
  SecretsManagerClient,
  GetSecretValueCommand
} from "@aws-sdk/client-secrets-manager";

const loadSecrets = async () => {

  const client = new SecretsManagerClient({
    region: process.env.AWS_REGION
  });

  const response = await client.send(
    new GetSecretValueCommand({
      SecretId: process.env.SECRET_NAME
    })
  );

  return JSON.parse(response.SecretString);
};

export default loadSecrets;