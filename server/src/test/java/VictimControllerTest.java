import com.example.server.controllers.VictimController;
import com.example.server.entities.Victim;
import com.example.server.services.VictimService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.mockito.Mockito.*;

public class VictimControllerTest {

    @Mock
    private VictimService victimService;

    @InjectMocks
    private VictimController victimController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testSaveVictimDetails() {

        Victim victim = new Victim();
        when(victimService.saveVictimDetails(victim)).thenReturn(victim);

        Victim savedVictim = victimController.saveVictimDetails(victim);

        verify(victimService, times(1)).saveVictimDetails(victim);

        Assertions.assertEquals(victim, savedVictim);
    }


    @Test
    public void testGetAllUnverifiedVictims() {

        List<Victim> unverifiedVictims = new ArrayList<>();
        unverifiedVictims.add(new Victim());

        when(victimService.getAllUnverifiedVictims()).thenReturn(unverifiedVictims);

        List<Victim> result = victimController.showAllUnverifiedVictim();

        verify(victimService, times(1)).getAllUnverifiedVictims();

        Assertions.assertEquals(unverifiedVictims, result);
    }


    @Test
    public void testGetAllVerifiedVictims() {

        List<Victim> verifiedVictims = new ArrayList<>();
        verifiedVictims.add(new Victim());

        when(victimService.getAcceptedandNeedtobeSelectDeliveryVictim()).thenReturn(verifiedVictims);

        List<Victim> result = victimController.getAllVerifiedVictims();

        verify(victimService, times(1)).getAcceptedandNeedtobeSelectDeliveryVictim();

        Assertions.assertEquals(verifiedVictims, result);
    }

    @Test
    public void testUpdateTobeDeliver() {

        Long id = 1L;
        Map<String, Boolean> requestBody = new HashMap<>();
        requestBody.put("isDeliverySelected", true);

        when(victimService.updateTobeDeliverStatusStatus(id, true)).thenReturn(new Victim());

        Victim result = victimController.updateTobeDeliver(id, requestBody);

        verify(victimService, times(1)).updateTobeDeliverStatusStatus(id, true);

        Assertions.assertNotNull(result);
    }


    @Test
    public void testUpdateVictim() {
        // Create the required parameters
        Long id = 1L;
        Map<String, Boolean> requestBody = new HashMap<>();
        requestBody.put("isVerified", true);
        requestBody.put("isAccepted", true);

        when(victimService.updateAcceptanceStatus(id, true, true)).thenReturn(new Victim());

        Victim result = victimController.updateVictim(id, requestBody);

        verify(victimService, times(1)).updateAcceptanceStatus(id, true, true);

        Assertions.assertNotNull(result);
    }


    @Test
    public void testGetAllToDeliveyVictims() {

        List<Victim> toDeliverVictims = new ArrayList<>();
        toDeliverVictims.add(new Victim());

        when(victimService.getAcceptedAndSelectedtoDelivery()).thenReturn(toDeliverVictims);

        List<Victim> result = victimController.getAllToDeliveyVictims();

        verify(victimService, times(1)).getAcceptedAndSelectedtoDelivery();

        Assertions.assertEquals(toDeliverVictims, result);
    }

    @Test
    public void testGetRejectedVictims() {

        List<Victim> rejectedVictims = new ArrayList<>();
        rejectedVictims.add(new Victim());

        when(victimService.getRejectedVictims()).thenReturn(rejectedVictims);

        List<Victim> result = victimController.getRejectedVictims();

        verify(victimService, times(1)).getRejectedVictims();

        Assertions.assertEquals(rejectedVictims, result);
    }


    @Test
    public void testGetAcceptedVictims() {

        List<Victim> acceptedVictims = new ArrayList<>();
        acceptedVictims.add(new Victim());

        when(victimService.getAcceptedVictims()).thenReturn(acceptedVictims);

        List<Victim> result = victimController.getAcceptedVictims();

        verify(victimService, times(1)).getAcceptedVictims();

        Assertions.assertEquals(acceptedVictims, result);
    }

    @Test
    public void testUpdateVictimRejected() {

        Long id = 1L;
        Map<String, Boolean> requestBody = new HashMap<>();
        requestBody.put("isVerified", true);
        requestBody.put("isAccepted",false);

        when(victimService.updateVictimRejected(id, true, false)).thenReturn(new Victim());

        Victim result = victimController.updateVictimRejected(id, requestBody);

        verify(victimService, times(1)).updateVictimRejected(id, true, false);

        Assertions.assertNotNull(result);
    }

}
