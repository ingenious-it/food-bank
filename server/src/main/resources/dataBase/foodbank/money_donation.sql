create table money_donation
(
    donationid      varchar(255) not null
        primary key,
    date_and_time   varchar(255) null,
    donation_amount bigint       not null,
    user_id         varchar(255) null
);

