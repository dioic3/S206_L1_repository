import Login from "../../page-objetcs/login/login";
import visit from "../../page-objetcs/visit/visit";
const UI = new Login;
const Vis = new visit;

describe('Cenário: cenário de login errado', () => {
    it('Caso: login errado', () => {
        Vis.visit();
        UI.wrongName();
        UI.wrongPass();
        UI.submit();
        UI.message();
    });
});
