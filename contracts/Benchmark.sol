// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Benchmark {

    uint256 public value;

    // Store a value (this is our "transaction")
    function setValue(uint256 _value) public {
        value = _value;
    }

    // Read value (not counted in TPS, but useful)
    function getValue() public view returns (uint256) {
        return value;
    }
}