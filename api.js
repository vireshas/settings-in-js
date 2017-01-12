/*

1: GET api/v1/schemas
Media
Device
Global


2: GET api/v1/schemas/{name}

{
  scope: 'admin',
  setting_name: 'auto_assign_type',
  data_type: 'map<string: regex>','
  example: '
    auto_assign_type:
      from: asset_id or filename
      songs: ^SONG
      commercials: ^COM | ^CM
      program_segment: .*_0[2-9]$ | .*_[1-9]\d$
  '
}

3: PUT api/v1/hostname/{hostname}/schemas/{schemaName}
   settings as JSON data

4: GET api/v1/host/{hostname}/schemas/{schemaName}.{format[.json|.ini|.yml]}
   settings in requested format

*/