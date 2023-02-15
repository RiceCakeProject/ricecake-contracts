// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

///
///  ______     __     ______     ______     ______     ______     __  __     ______    
/// /\  == \   /\ \   /\  ___\   /\  ___\   /\  ___\   /\  __ \   /\ \/ /    /\  ___\   
/// \ \  __<   \ \ \  \ \ \____  \ \  __\   \ \ \____  \ \  __ \  \ \  _"-.  \ \  __\   
///  \ \_\ \_\  \ \_\  \ \_____\  \ \_____\  \ \_____\  \ \_\ \_\  \ \_\ \_\  \ \_____\ 
///   \/_/ /_/   \/_/   \/_____/   \/_____/   \/_____/   \/_/\/_/   \/_/\/_/   \/_____/ 
///

/// @title RiceCake
/// @author https://github.com/kmasuda1986
/// @dev RiceCake is a community driven project, and we are always looking for new ideas to improve the token.
/// @dev 100,000,000,000 RICE tokens are minted on deployment.
contract RiceCake is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("RiceCake", "RICE") {
        _mint(msg.sender, 100e9 * 10 ** 18);
    }
}
