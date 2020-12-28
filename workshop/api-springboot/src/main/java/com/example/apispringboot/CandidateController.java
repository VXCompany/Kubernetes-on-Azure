package com.example.apispringboot;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path="candidates")
public class CandidateController {

    private final CandidateService candidateService;

    public CandidateController(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    @GetMapping(value = "", produces = "application/json")
    public ResponseEntity< List<Candidate>> getAllCandidates() {
        return ResponseEntity.ok()
                .header("Returned-By", "api-springboot")
                .body(candidateService.getAllCandidates());
    }

    @GetMapping(path = "/match", produces = "application/json")
    public ResponseEntity<Candidate> getNextMatch() {

        return ResponseEntity.ok()
                .header("Returned-By", "api-springboot")
                .body(candidateService.getNextMatch());
    }

}
