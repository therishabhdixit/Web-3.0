// https://eth-ropsten.alchemyapi.io/v2/erUj0a7IdeB_OkrpFpyYMALN2Zla-cWM

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/erUj0a7IdeB_OkrpFpyYMALN2Zla-cWM',
      accounts: [
        '72796d1a92586f1e215ccb4c3709757d81c993bc7a7dc41ef0754fbcc0162674',
      ],
    },
  },
};
