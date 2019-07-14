<label> {{input.name}}
    <small> {{input.type}}</small>
</label>
<div ng-switch="input.type.slice(-2) === '[]'">
    <array-input-drtv ng-switch-when="true" name="{{input.name}}" type="{{input.type}}"></array-input-drtv>
    <div ng-switch-default="false" ng-switch="input.type">
        <p class="item write-unit256" ng-switch-when="uint256">

            <input
                class="form-control"
                type="text"
                placeholder="151"
                ng-model="input.value"
                ng-class="Validator.isPositiveNumber(input.value) ? 'is-valid' : 'is-invalid'"
            />
        </p>
        <p class="item write-string" ng-switch-when="string">

            <input
                class="form-control"
                type="text"
                placeholder="Ohh! Shiny!"
                ng-model="input.value"
                ng-class="input.value!='' ? 'is-valid' : 'is-invalid'"
            />
        </p>
        <p class="item write-bytes" ng-switch-when="bytes">

            <input
                class="form-control"
                type="text"
                placeholder="0x151bc..."
                ng-model="input.value"
                ng-class="Validator.isValidHex(input.value) ? 'is-valid' : 'is-invalid'"/>
        </p>
        <p class="item write-boolean" ng-switch-when="bool">

            <span class="radio">
                <label>
                <input ng-model="input.value"
                       type="radio"
                       name="optradio-{{input.name}}"
                       ng-value="true"
                >
                    True
                </label>
            </span>
            <span class="radio">
                    <label>
                        <input ng-model="input.value"
                               type="radio"
                               name="optradio-{{input.name}}"
                               ng-value="false">
                        False
                    </label>
                </span>
        </p>
        <p class="item" ng-switch-default>
            <input class="form-control"
                   type="{{input.type}}"
                   placeholder=""
                   ng-model="input.value"
                   ng-class="input.value ? 'is-valid' : 'is-invalid'"
            />
        </p>
    </div>
</div>
