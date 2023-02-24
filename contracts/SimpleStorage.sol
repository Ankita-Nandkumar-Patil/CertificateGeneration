// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract SimpleStorage {
    string a;


    function setter(string memory _a) public {
        a = _a;
    }

    function getter() public view returns (string memory) {
        return a;
    }
}