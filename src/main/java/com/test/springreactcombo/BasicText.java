package com.test.springreactcombo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicText {

    @GetMapping("/api/basic-text")
    public String basicText() {
        return "Here is the basic text";
    }
}
