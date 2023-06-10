create table `delivery_person details`
(
    delivery_person_id   int          not null
        primary key,
    delivery_person_name varchar(255) null,
    did                  int          null,
    constraint FKtifbdvia7i0t4si62s5hvu83k
        foreign key (did) references delivery (did)
);

