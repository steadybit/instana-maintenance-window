# Define Instana Maintenance Windows

## Example

To use the GitHub Action, you'll need to add it as a step in
your [workflow file](https://help.github.com/en/actions/automating-your-workflow-with-github-actions).

```yaml
on: push

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: steadybit/instana-maintenance-window@v1
        with:
          origin: "https://{{unit}}-{{tenant}}.instana.io"
          apiToken: ${{ secrets.INSTANA_API_TOKEN }}
          query: "entity.zone:test"
          name: ""
```

## Inputs

| Name       | Type   | Required? | Default | Description                                                                                  |
|------------|--------|-----------|---------|----------------------------------------------------------------------------------------------|
| `origin`   | string | yes       |         | The HTTP origin of your Instana installation, e.g., `https://{{unit}}-{{tenant}}.instana.io` |
| `apiToken` | string | yes       |         | An API token with the `ConfigureCustomAlerts` permission.                                    |
| `query`    | string | yes       |         | Dynamic focus query describing for which infrastructure to disable alerting                  |
| `name`     | string | yes       |         | Name of the maintenance window                                                               |
| `duration` | int    | no        | 60000   | How long should the maintenance window be (in milliseconds)?                                 |

## Outputs

None for now.
