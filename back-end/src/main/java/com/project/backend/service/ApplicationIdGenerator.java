package com.project.backend.service;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class ApplicationIdGenerator implements IdentifierGenerator {

    // Generates ID number for new dog using the next number after the latest ID registered
    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {
        Connection connection = session.connection();
        try {
            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery("SELECT MAX(id) as max_id FROM application");
            if (rs.next()) {
                int maxId = rs.getInt("max_id");
                int nextId = maxId + 1;
                return nextId;
            }
        } catch (Exception e) {
            throw new HibernateException("Error.", e);
        }
        return null;
    }
}
