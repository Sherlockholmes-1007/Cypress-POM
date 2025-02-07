import HomePage from '../../page_objects/select_options';

describe('Homepage Test', () => {
  const homePage = new HomePage();

  before(() => {
    cy.fixture('loginData').then((data) => {
      cy.visit('/');
      cy.login(data.validUser.username, data.validUser.password);
    });
  });

  it('should fill hotel search details', () => {
    homePage.selectLocation('Melbourne');
    homePage.selectHotel('Hotel Sunshine');
    homePage.selectRoomType('Deluxe');
    homePage.selectNumberOfRooms('1 - One');
    homePage.enterCheckInDate('07/02/2025');
    homePage.enterCheckOutDate('08/02/2025');
    homePage.selectAdultsPerRoom('1 - One');
    homePage.selectChildrenPerRoom('0 - None');
  });
});
