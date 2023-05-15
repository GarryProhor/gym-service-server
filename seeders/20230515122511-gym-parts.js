// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker');
('use strict');

const gymManufacturers = [
  'Life Fitness',
  'Technogym',
  'Hammer Strength',
  'Star Trac ',
  'Matrix ',
  'Cybex',
  'Precor',
  'Inotec',
  'Panatta',
];
const partsManufacturers = [
  'Rope Belts',
  'Rollers',
  'Pillows',
  'Plastic fittings',
  'Fasteners',
  'Cargo blocks',
  'Cuffs Insurance',
  'Grips',
  'Other',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      'GymParts',
      [...Array(100)].map(() => ({
        gym_manufacturer:
          gymManufacturers[Math.floor(Math.random() * gymManufacturers.length)],
        parts_manufacturer:
          partsManufacturers[
            Math.floor(Math.random() * partsManufacturers.length)
          ],
        price: faker.random.numeric(3),
        name: faker.lorem.sentence(2),
        description: faker.lorem.sentence(10),
        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.technics()}?random=${faker.random.numeric(30)}`,
          ),
        ),
        vendor_code: faker.internet.password(),
        in_stock: faker.random.numeric(1),
        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),
        popularity: faker.random.numeric(3),
        compatibility: faker.lorem.sentence(7),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('GymParts', null, {});
  },
};
