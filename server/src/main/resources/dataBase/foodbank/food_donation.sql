create table food_donation
(
    donationid       int          not null
        primary key,
    donation_address varchar(255) null,
    donation_date    datetime(6)  null,
    nearest_location varchar(255) null,
    selected_option  varchar(255) null
);

