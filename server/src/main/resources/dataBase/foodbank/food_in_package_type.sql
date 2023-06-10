create table food_in_package_type
(
    quantity_available int not null,
    id                 int not null,
    typeid             int not null,
    primary key (id, typeid),
    constraint FK68w2voi9dq3m1k0ji6u1miucf
        foreign key (id) references food_item (id),
    constraint FKbg17y940unixkpou9ivey80cb
        foreign key (typeid) references package_type (typeid)
);

