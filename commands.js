// Bitcoin Restful API For aOS Sunshine 
// File: commands.js
// Author: Jared Rice Sr. 
// Organization: AriseBank (AriseLabs) [https://arisebank.com] [https://developers.arisebank.com]
// This file contains the normal Bitcoin API endpoints, as defined at https://labs.arisebank.com/crypto-tools/bf-api/
// These API endpoints could change for Bitcoin, Litecoin, Dogecoin and other coins who update along with Bitcoin's updates.
// Less popular coins may not update. You can stay up to date with Bitcoin-related API changes here: https://labs.arisebank.com/crypto-tools/bf-api/ 

module.exports = {
  addMultiSigAddress: 'addmultisigaddress',
  addNode: 'addnode', 
  backupWallet: 'backupwallet',
  createMultiSig: 'createmultisig',
  createRawTransaction: 'createrawtransaction', 
  decodeRawTransaction: 'decoderawtransaction', 
  dumpPrivKey: 'dumpprivkey',
  encryptWallet: 'encryptwallet',
  getAccount: 'getaccount',
  getAccountAddress: 'getaccountaddress',
  getAddedNodeInfo: 'getaddednodeinfo', 
  getAddressesByAccount: 'getaddressesbyaccount',
  getBalance: 'getbalance',
  getBlock: 'getblock',
  getBlockCount: 'getblockcount',
  getBlockHash: 'getblockhash',
  getBlockTemplate: 'getblocktemplate', 
  getConnectionCount: 'getconnectioncount',
  getDifficulty: 'getdifficulty',
  getGenerate: 'getgenerate',
  getHashesPerSecond: 'gethashespersec',
  getHashesPerSec: 'gethashespersec',
  getInfo: 'getinfo',
  getMiningInfo: 'getmininginfo',
  getNewAddress: 'getnewaddress',
  getPeerInfo: 'getpeerinfo', 
  getRawMemPool: 'getrawmempool', 
  getRawTransaction: 'getrawtransaction', 
  getReceivedByAccount: 'getreceivedbyaccount',
  getReceivedByAddress: 'getreceivedbyaddress',
  getTransaction: 'gettransaction',
  getTxOut: 'gettxout', 
  getTxOutSetInfo: 'gettxoutsetinfo', 
  getWork: 'getwork',
  help: 'help',
  importPrivKey: 'importprivkey',
  keypoolRefill: 'keypoolrefill',
  keyPoolRefill: 'keypoolrefill',
  listAccounts: 'listaccounts',
  listAddressGroupings: 'listaddressgroupings', 
  listLockUnspent: 'listlockunspent', 
  listReceivedByAccount: 'listreceivedbyaccount',
  listReceivedByAddress: 'listreceivedbyaddress',
  listSinceBlock: 'listsinceblock',
  listTransactions: 'listtransactions',
  listUnspent: 'listunspent', 
  lockUnspent: 'lockunspent', 
  move: 'move',
  sendFrom: 'sendfrom',
  sendMany: 'sendmany',
  sendRawTransaction: 'sendrawtransaction', 
  sendToAddress: 'sendtoaddress',
  setAccount: 'setaccount',
  setGenerate: 'setgenerate',
  setTxFee: 'settxfee',
  signMessage: 'signmessage',
  signRawTransaction: 'signrawtransaction', 
  stop: 'stop',
  submitBlock: 'submitblock', 
  validateAddress: 'validateaddress',
  verifyMessage: 'verifymessage',
  walletLock: 'walletlock',
  walletPassphrase: 'walletpassphrase',
  walletPassphraseChange: 'walletpassphrasechange'
};
