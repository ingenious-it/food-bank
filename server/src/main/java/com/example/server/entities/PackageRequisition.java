package com.example.server.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@Table(name="PackageTypeDetails")
@NoArgsConstructor
@AllArgsConstructor
public class PackageRequisition {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int Packageid;
    private String PackageType;
    private int RequestedQuantity;

    public static void main(String[] args) {
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("my-persistence-unit");
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        try {
            Query query = entityManager.createQuery("SELECT p.PackageType, COUNT(*) FROM PackageRequisition p GROUP BY p.PackageType");
            List<Object[]> results = query.getResultList();
            for (Object[] row : results) {
                String packageType = (String) row[0];
                long count = (long) row[1];
                System.out.println(packageType + ": " + count);
            }
        } finally {
            entityManager.close();
            entityManagerFactory.close();
        }
    }


}
