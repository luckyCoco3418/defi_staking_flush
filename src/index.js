require('dotenv/config');
const token = require('./contracts/TOKEN.json')

const TronWeb = require('tronweb')
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider(process.env.TRON_FULL_HOST);
const solidityNode = new HttpProvider(process.env.TRON_FULL_HOST);
const eventServer = new HttpProvider(process.env.TRON_FULL_HOST);
const privateKey = process.env.PRIVATE_KEY;
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);

const flush = async () => {
  let contract = await tronWeb.contract(token.abi, process.env.CONTRACT_ADDRESS); 
  await contract.xfFlush().send();
}

flush();
