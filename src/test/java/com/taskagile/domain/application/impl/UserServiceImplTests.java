package com.taskagile.domain.application.impl;

import static org.junit.jupiter.api.Assertions.assertThrows;

import com.taskagile.domain.common.mail.MailManager;
import com.taskagile.domain.common.event.DomainEventPublisher;
import com.taskagile.domain.model.user.RegistrationException;
import com.taskagile.domain.model.user.RegistrationManagement;


import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;

public class UserServiceImplTests {
  private RegistrationManagement registrationManagementMock;
  private DomainEventPublisher eventPublisherMock;
  private MailManager mailManagerMock;
  private UserServiceImpl instance;

  @BeforeEach
  public void setUp() {
    registrationManagementMock = mock (RegistrationManagement.class);
    eventPublisherMock = mock (DomainEventPublisher.class);
    mailManagerMock = mock (MailManager.class);
    instance = new UserServiceImpl(registrationManagementMock, eventPublisherMock, mailManagerMock);
  }

  @Test
  public void register_nullCommand_shouldFail() throws RegistrationException {
    assertThrows(IllegalArgumentException.class, () -> {
      instance.register(null);
    });
  }
}
