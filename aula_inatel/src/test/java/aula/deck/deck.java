package aula.deck;

import com.intuit.karate.junit5.Karate;

class Deck {
    @Karate.Test
    Karate testUsers() {
        return Karate.run("deck").relativeTo(getClass());
    }    

}
