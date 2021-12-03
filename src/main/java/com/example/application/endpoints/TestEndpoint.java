package com.example.application.endpoints;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.fusion.Endpoint;

@Endpoint
@AnonymousAllowed
public class TestEndpoint {


    public String testCall(String value){
        System.out.println("Endpoint got value: " + value);
        return "Fusion Server: " + value; 
    }

    
}
