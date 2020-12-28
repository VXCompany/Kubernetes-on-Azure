package com.example.apispringboot;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Random;

@Service
public class CandidateServiceImpl implements CandidateService{
    private final CandidateRepository candidateRepository;

    public CandidateServiceImpl(CandidateRepository candidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    @Override
    public List<Candidate> getAllCandidates() {
        return candidateRepository.findAll();
    }

    @Override
    public Candidate getNextMatch() {
        Random rand = new Random();
        List<Candidate> list = candidateRepository.findAll();

        return list.get(rand.nextInt(list.size()));
    }
}
