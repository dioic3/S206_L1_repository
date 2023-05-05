import Register from "../../page-objetcs/register/register";
import visit from "../../page-objetcs/visit/visit";
const UI = new Register;
const Vis = new visit;

describe('Cenário de teste: ausência de algum campo', () => {
    it('Caso: verificando a messagem de algum campo', () => {
        Vis.visit();
        UI.register();
        UI.firstName();
        UI.lastName();
        UI.userName();
        UI.password();
        UI.submit();
        UI.message();
    });
});