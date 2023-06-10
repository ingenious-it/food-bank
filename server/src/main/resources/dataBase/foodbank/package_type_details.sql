create table package_type_details
(
    packageid          int          not null
        primary key,
    package_type       varchar(255) null,
    requested_quantity int          not null
);

