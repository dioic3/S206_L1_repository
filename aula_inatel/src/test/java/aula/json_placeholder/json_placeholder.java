package aula.json_placeholder;

import com.intuit.karate.junit5.Karate;

class PlaceHolder {
    @Karate.Test
    Karate testUsers() {
        return Karate.run("json_placeholder").relativeTo(getClass());
    }    

}
