create table food_item_donation
(
    donated_quantity int not null,
    id               int not null,
    donationid       int not null,
    primary key (donationid, id),
    constraint FKp5ado370lg1nvbqn81aljbpqr
        foreign key (donationid) references food_donation (donationid),
    constraint FKtko9cronjvicfd89x1x8tgxe9
        foreign key (id) references food_item (id)
);

