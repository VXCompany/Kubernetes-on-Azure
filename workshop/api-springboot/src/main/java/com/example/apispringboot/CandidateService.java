package com.example.apispringboot;

import java.util.List;

public interface CandidateService {
    List<Candidate> getAllCandidates();
    Candidate getNextMatch();
}
