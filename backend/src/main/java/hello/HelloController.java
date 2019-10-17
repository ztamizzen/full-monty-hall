package hello;

import java.util.HashMap;
import java.util.LinkedHashMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloController {
    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @RequestMapping(value = "/montyhall/{iterations}/{pickOtherDoor}", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public HashMap<String, Object> montyHallNode(@PathVariable("iterations") int iterations,
            @PathVariable("pickOtherDoor") boolean pickOtherDoor) {
        HashMap<String, Object> rtn = new LinkedHashMap<String, Object>();
        MontyHall monty = new MontyHall(iterations, pickOtherDoor);
        int result = monty.run();
        rtn.put("pickOtherDoor", pickOtherDoor);
        rtn.put("iterations", iterations);
        rtn.put("wins", result);
        return rtn;
    }
}
