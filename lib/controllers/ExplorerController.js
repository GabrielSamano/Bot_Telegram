const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static applyFizzbuzz(score){
        return FizzbuzzService.applyValidationInNumber(score);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    static getExplorersByStack(stack){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersByStack(explorers, stack);
    }
    static fizzBuzzBotResponse(msg){
        const numberToApplyFb = parseInt(msg);
        

        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
            const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
            return responseBot;
        } else {
            const explorers = ExplorerController.getExplorersUsernamesByMission(msg);
            if(explorers.length > 0){
                return `Explorers Misión ${msg.toUpperCase()}: ` + explorers.join(", ");
            }else{
                return `No se encontraron explorers para la misión ${msg.toUpperCase()}`;
            }
        }
    }
}

module.exports = ExplorerController;


