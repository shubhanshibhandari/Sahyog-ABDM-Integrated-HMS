package com.sahyog.backend.repo;

import com.sahyog.backend.entities.CareContext;
import com.sahyog.backend.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CareContextRepository extends JpaRepository<CareContext, Integer> {
    public List<CareContext> findCareContextsByPatient(Patient patient);
    public CareContext findCareContextsByCareContextId(int careContextId);
}
