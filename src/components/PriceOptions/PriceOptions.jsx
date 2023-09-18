import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const PriceOptions = [
    {
      "id": 1,
      "name": "Gold Membership",
      "price": 59.99,
      "features": [
        "Access to cardio equipment",
        "Access to strength training area",
        "Access to locker rooms and showers",
        "Unlimited access to group fitness classes",
        "Personal trainer consultation (2 sessions per month)",
        "Swimming pool access",
        "Sauna and steam room access",
        "Nutritional counseling",
      ],
    },
    {
      "id": 2,
      "name": "Silver Membership",
      "price": 39.99,
      "features": [
        "Access to cardio equipment",
        "Access to strength training area",
        "Access to locker rooms and showers",
        "Limited access to group fitness classes (3 classes per week)",
        "Access to sauna and steam room (on weekdays)",
        "Discounted personal trainer sessions",
        "Access to yoga and Pilates studio",
      ],
    },
    {
      "id": 3,
      "name": "Student Membership",
      "price": 19.99,
      "features": [
        "Access to cardio equipment",
        "Access to strength training area",
        "Access to locker rooms and showers",
        "Access to group fitness classes (limited)",
        "Student ID required",
        "Access during off-peak hours",
      ],
    },
  ];

  return (
    <div>
        <h2 className="text-5xl text-center mt-4">Best Price In the World</h2>
        <div className="grid md:grid-cols-3 mx-auto container">
          {
              PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
          }
        </div>
    </div>
  )};

export default PriceOptions;
