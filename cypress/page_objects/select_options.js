import { HomePageLocators } from '../page_objects/locators/tools';

class HomePage {
  selectLocation(location) {
    cy.get(HomePageLocators.locationDropdown).select(location);
  }

  selectHotel(hotel) {
    cy.get(HomePageLocators.hotelsDropdown).select(hotel);
  }

  selectRoomType(roomType) {
    cy.get(HomePageLocators.roomTypeDropdown).select(roomType);
  }

  selectNumberOfRooms(rooms) {
    cy.get(HomePageLocators.numberOfRoomsDropdown).select(rooms);
  }

  enterCheckInDate(date) {
    cy.get(HomePageLocators.checkInDateInput).clear().type(date);
  }

  enterCheckOutDate(date) {
    cy.get(HomePageLocators.checkOutDateInput).clear().type(date);
  }

  selectAdultsPerRoom(adults) {
    cy.get(HomePageLocators.adultsPerRoomDropdown).select(adults);
  }

  selectChildrenPerRoom(children) {
    cy.get(HomePageLocators.childrenPerRoomDropdown).select(children);
  }
}

export default HomePage;
