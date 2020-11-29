// SPDX-License-Identifier: MIT

pragma solidity 0.6.11;

interface IPriceFeed {
    
    // --- Events ---
    
    event PriceUpdated(uint _newPrice);
    event TroveManagerAddressChanged(address _troveManagerAddress);

    // --- Functions ---
    
     function setAddresses(
        address _troveManagerAddress,
        address _priceAggregatorAddress,
        address _priceAggregatorAddressTestnet
    ) external;

    function setPrice(uint _price) external returns (bool);

    function getPrice() external view returns (uint);
}
