create table victim_details
(
    id                   bigint       not null
        primary key,
    city                 varchar(255) null,
    description          varchar(255) null,
    first_name           varchar(255) null,
    is_verified          bit          null,
    last_name            varchar(255) null,
    nic                  varchar(255) null,
    no                   varchar(255) null,
    phone_number         varchar(255) null,
    street               varchar(255) null,
    is_delivered         bit          null,
    is_rejected          bit          null,
    package_type         varchar(255) null,
    is_accepted          bit          null,
    is_delivery_selected bit          null
);

