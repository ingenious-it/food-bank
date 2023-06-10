create table packed_food_package
(
    packedid          int          not null
        primary key,
    package_type_name varchar(255) null,
    packed_date       datetime(6)  null,
    packed_quantity   int          not null,
    typeid            int          null,
    constraint FKgudphoeohprrobcff3wsmxgut
        foreign key (typeid) references package_type (typeid)
);

