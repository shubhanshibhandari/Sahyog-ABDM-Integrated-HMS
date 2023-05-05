package com.sahyog.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.NaturalId;

import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Table(
        uniqueConstraints = @UniqueConstraint(
                name = "healthId_unique",
                columnNames = "healthId"
        )
)
public class Patient{

    @Id
    @SequenceGenerator(
            name = "patient_sequence",
            sequenceName = "patient_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "patient_sequence"
    )
    public int patientId;
    public String healthId;
    public String name;
    public String gender;
    public int yearOfBirth;
    public int dayOfBirth;
    public int monthOfBirth;
    public String healthIdNumber;
    public String mobile;
    @Embedded
    public Address address;
    @OneToMany(
            mappedBy = "patient",
            fetch = FetchType.LAZY
    )
    List<CareContext> careContextList;
    @OneToMany(
            mappedBy = "patient",
            fetch = FetchType.LAZY
    )
    List<Visit> visitList;
    @OneToMany(
            mappedBy = "patient",
            fetch = FetchType.LAZY
    )
    List<Consent> consentList;

    @OneToMany(mappedBy = "patient")
    List<Visit> artifactList;

    @OneToMany(mappedBy = "patient")
    List<Appointment> appointmentList;
}


