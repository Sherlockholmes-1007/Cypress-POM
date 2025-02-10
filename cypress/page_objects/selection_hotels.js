import { HomePageLocators } from '../page_objects/homepage';

class selectHotel {
  selectHotelFromTable(hotelName) {
    cy.get(HomePageLocators.hotelRows).each(($row) => {
      const currentHotel = $row.find(HomePageLocators.hotelName).text().trim();
      if (currentHotel === hotelName) {
        cy.wrap($row).find('input[type="radio"]').check();
      }
    }
  )}
};
