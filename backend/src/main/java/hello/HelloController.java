package hello;

import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.LinkedHashMap;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
public class HelloController {
    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @RequestMapping(value = "/montyhall/{iterations}/{pickOtherDoor}", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public HashMap<String, Integer> montyHallNode(@PathVariable("iterations") int iterations,
            @PathVariable("pickOtherDoor") boolean pickOtherDoor) {
        HashMap<String, Integer> rtn = new LinkedHashMap<String, Integer>();
        MontyHall monty = new MontyHall(iterations, pickOtherDoor);
        int result = monty.run();
        rtn.put("iterations", iterations);
        rtn.put("wins", result);
        return rtn;
    }
}
