const ExplorerController = require("./../../lib/controllers/ExplorerController")

describe("Prueba para verficar el ExplorerController", () => {
    test("1 Obtener los explorers por JavaScript", () => {
        const explorersMissionNode = ExplorerController.getExplorersByMission("node");
        expect(explorersMissionNode.length).toBe(10);
       
    });
    test("2 Obtener los usernames de los explorers", () => {
        const usernamesMissionNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernamesMissionNode[0]).toBe("ajolonauta1");
        
    });
    test("3 Obtener la cantidad de usuarios", () => {
        const amountMissionNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(amountMissionNode).toBe(10);
    });
    test("4 Obtener los trick", () => {
        const fizzbuzz3 = ExplorerController.applyFizzbuzz(3);
        const fizzbuzz5 = ExplorerController.applyFizzbuzz(5);
        const fizzbuzz15 = ExplorerController.applyFizzbuzz(15);
        const fizzbuzz1 = ExplorerController.applyFizzbuzz(1);
        expect(fizzbuzz3).toBe("FIZZ");
        expect(fizzbuzz5).toBe("BUZZ");
        expect(fizzbuzz15).toBe("FIZZBUZZ");
        expect(fizzbuzz1).toBe(1);
    });
    test("5 Obtener los stack", () => {
        const stackJavascript = ExplorerController.getExplorersByStack('javascript');
        expect(stackJavascript.length).toBe(11);

    });
    test("6 Prueba del bot", () => {
        const bot1 = ExplorerController.fizzBuzzBotResponse(3);
        const bot2 = ExplorerController.fizzBuzzBotResponse(5);
        const bot3 = ExplorerController.fizzBuzzBotResponse(15);
        const bot4 = ExplorerController.fizzBuzzBotResponse("node");
        const bot5 = ExplorerController.fizzBuzzBotResponse("java");
        expect(bot1).toBe("Tu número es: 3. Validación: FIZZ");
        expect(bot2).toBe("Tu número es: 5. Validación: BUZZ");
        expect(bot3).toBe("Tu número es: 15. Validación: FIZZBUZZ");
        expect(bot4).toBe("Explorers Misión NODE: ajolonauta1, ajolonauta2, ajolonauta3, ajolonauta4, ajolonauta5, ajolonauta11, ajolonauta12, ajolonauta13, ajolonauta14, ajolonauta15");
        expect(bot5).toBe("Explorers Misión JAVA: ajolonauta6, ajolonauta7, ajolonauta8, ajolonauta9, ajolonauta10");

        
    })
});